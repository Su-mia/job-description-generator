from flask import Flask , request, jsonify
import os
from pinecone import Pinecone, ServerlessSpec
from semantic_router.encoders import HuggingFaceEncoder

import groq
from description_generator import get_docs , generate , reformat_job_description
from flask_cors import CORS

from mtranslate import translate




api_key = os.getenv("PINECONE_API_KEY") 
pc = Pinecone(api_key=api_key)
index_name = 'groq-llama-3-rag'

if index_name not in pc.list_indexes().names():
        pc.create_index(
            name=index_name, 
            dimension=768, 
            metric='cosine',
            spec=ServerlessSpec(
                cloud='aws',
                region='us-west-1'
            )
        )
index = pc.Index(index_name)


encoder = HuggingFaceEncoder(name="dwzhu/e5-base-4k")
#Our retrieval component works, now let's try feeding this into a groq model
groq_client = groq.Client(api_key="GROQ_API_KEY")




# out = generate(query=query, docs=docs)
# print(out)


app = Flask(__name__) 
CORS(app)
@app.route('/')
def hello():
    return 'Hello there'

@app.route('/description', methods=['POST'])  # Added POST method to match the use of request.get_json()
def profile():
    data = request.get_json()

    jobtitle = data.get('jobTitle', '')
    industry = data.get('industry', '')
    tone = data.get('tone', '')
    format_ = data.get('format', '')
    workHours = data.get('workHours', '')
    location = data.get('location', '')

    # Start constructing the query
    query = f"give me job description for {jobtitle}, in the {industry} industry "

    # Conditionally add 
    if location:
        query += f" the job location is :  {location}"

    if tone:
        query += f" with {tone} tone "
    
    if workHours:
        query += f" with {workHours} work hours"


    if format_:
        query += f" in {format_} format"

    # Retrieve related documents and generate the description
    docs = get_docs(query, top_k=5, encoder=encoder, index=index)
    description = generate(query, docs, groq_client=groq_client)

    return description


@app.route('/reformat', methods=['POST'])
def reformat_route():
    # Retrieve the data from the POST request body
    data = request.get_json()  # Assumes JSON data
    description = data['description']
    jobtitle = data.get('jobTitle', '')
    industry = data.get('industry', '')
    tone = data.get('tone', '')
    format_ = data.get('format', '')
    workHours = data.get('workHours', '')
    location = data.get('location', '')
    
    # Generate the new description using the provided details
    query = f"Reformat this job description: {description}, with this format: {format_}"
    if jobtitle:
        query += f" it is for the job :  {jobtitle}"

    if industry:
        query += f" in the industry :  {industry}"

    if location:
        query += f" the job location is: {location}"

    if tone:
        query += f" with {tone} tone "
    
    if workHours:
        query += f" with {workHours} work hours"

    if format_:
        query += f" in {format_} format"
    new_description = reformat_job_description(query, groq_client=groq_client)
    return jsonify(new_description)

@app.route('/translate' , methods=['POST'])
def tranlate_route():
    data = request.get_json()  # Assumes JSON data
    to_translate = data['to_translate']
    translate_to = data.get('translate_to', '')
    
    if translate_to=="eng":
        translated_text = to_translate
    else:
        translated_text = translate(to_translate, translate_to)   
    

    return translated_text

app.run(host = "0.0.0.0" , port=80 )
