document.addEventListener("keypress",(key)=>{
    document.body.innerHTML = `
        <table>
            <tr>
                <th>key</th>
                <th>keycode</th>
                <th>code</th>
            </tr>
            <tr>
                <th>${key.key}</th>
                <th>${key.code}</th>
            </tr>
        </table>
    `
})