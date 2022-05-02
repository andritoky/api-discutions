import * as fs from'fs'

export function saveImageFile (myBase64: string) {
    let image_name = "profile"+ new Date().getTime().toString()+".jpeg"
    let path = "public/uploads/"+image_name
    let base64Image: any = myBase64.split(';base64,').pop();
    fs.writeFile(path, base64Image, {encoding: 'base64'}, function(err) {
        console.log('Image file created');
    });
    return image_name
}