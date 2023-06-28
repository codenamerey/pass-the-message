export const getFormValues = (form: HTMLFormElement) => {
    
    let jsonObject = {};
    const formData = new FormData(form);
    for(let field of formData) {
        (jsonObject as any)[field[0]] = field[1]
    }
    console.log(jsonObject)
    return jsonObject
}