const BASEURL = `https://jsonplaceholder.typicode.com`;

export const API = {
    GetAllPosts: async () => {
        let response = await fetch(`${BASEURL}/posts`);
        let json = await response.json();
        return json;
    },
    AddNewPost: async (title: string, body: string, userid: number) => {
        let response = await fetch(`${BASEURL}/posts`, {
            method: 'POST',
            body: JSON.stringify({title,body,userid}), 
            headers: {'Content-Type' : 'application/json'}
         });
         
         let json = await response.json()
         return json
    }
}