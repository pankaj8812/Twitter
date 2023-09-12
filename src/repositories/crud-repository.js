const mongoose = require("mongoose");

class CrudRepository{
    constructor(model){
        this.model = model;
        console.log(model);
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll(){
        try {
            // console.log("REPO body :" );
            const response = await this.model.find();
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(id){
        try {
            // console.log("inside get repo: ", id);
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id, data){
        try {
            const response = await this.model.findByIdAndUpdate(id, data); 
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async delete(data){
        try {
            const response = await this.model.findByIdAndDelete(data); 
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = CrudRepository;