import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {

    try {
        let data = await db.User.findAll();
        console.log('.........................');
        console.log(data);
        console.log('.........................');
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    }
    catch (error) {
        console.log(error);
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let getFindAllCrud = async (req, res) => {
    let data = await CRUDService.getAllUsers();

    return res.render('users/findAllUsers.ejs', {
        datalist: data
    });
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('Post CRUD from server');
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render('users/updateUser.ejs', {
            data : userData
        });
    } else {
        return res.send('User not found');
    }
 }

 let putCRUD = async (req, res) => {
    let data = req.body;
    let data1 = await CRUDService.updateUserData(data);
    return res.render('users/findAllUsers.ejs', {
        datalist: data1
    });
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send('Delete!!!!!!!!!');
    }
    else {
        return res.send('User not found');
    }
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    getFindAllCrud: getFindAllCrud,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
};