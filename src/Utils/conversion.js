export const getBlob = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          // console.log(event.target.result)
          resolve(event.target.result)
        };
        reader.readAsDataURL(file);
    })
}