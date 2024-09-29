def get_docs(query: str, top_k: int , encoder , index ) -> list[str]:
    # encode query
    xq = encoder([query])
    # search pinecone index
    res = index.query(vector=xq, top_k=top_k, include_metadata=True)
    # get doc text
    docs = [x["metadata"]['Job Description'] for x in res["matches"]]
    return docs



def generate(query: str, docs: list[str] , groq_client):
    system_message = (
        "You are a helpful assistant that generates job descriptions, don't specify random location if it is not provided, alwaysprovide a title "
        "context provided below.\n\n"
        "CONTEXT:\n"
        "\n---\n".join(docs)
    )
    messages = [
        {"role": "system", "content": system_message},
        {"role": "user", "content": query}
    ]
    # generate response
    chat_response = groq_client.chat.completions.create(
        model="llama3-8b-8192",
        messages=messages
    )
    return chat_response.choices[0].message.content


def reformat_job_description(query:str , groq_client):
    system_message = (
        "You are a helpful assistant that reformat generated job descriptions in a given provided format , always provide a title"
    )
    messages = [
        {"role": "system", "content": system_message},
        {"role": "user", "content": query}
    ]

    chat_response = groq_client.chat.completions.create(
        model="gemma2-9b-it",
        messages=messages
    )

    return chat_response.choices[0].message.content