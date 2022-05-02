import { Response} from 'express';

export  let sendResponse = (res: Response , data: any , message: string ) => {
    let responseObj = {
        data : data,
        message : message,
        succes : true,
        code : 200,
        class: "alert alert-primary"
    }
    res.status(200).json(responseObj)
}

export  let sendSimpleResponse = (res: Response , data: any ) => {
    let simpleResponseObj = {
        data : data,
        succes : true,
        code : 200,
    }
    res.status(200).json(simpleResponseObj)
}

export let sendError = (res: Response , message: string) => {
    let errorObj = {
        message : message || "Request Fail",
        succes : false,
        code : 400,
        class : "alert alert-danger"
    }
    res.status(400).json(errorObj)
}