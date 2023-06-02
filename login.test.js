const { response } = require('express');
const fetch = require('node-fetch2');

it("Should dectect bad username", async ()=>{
    let token = "";

    const options = {
        method: 'POST',
        headers:{
            "content-type":"application/Json"
        },
        body:JSON.stringify({
            userName: "help@gmail.com",
            password: "P@ssword"
        })
    };
    const response = await fetch ('https://dev.stedi.me/login',options);
    token = await response.text()
    const status = response.status;
    expect(status).toBe(500);
    expect(token.length).toBe(60);
    
});