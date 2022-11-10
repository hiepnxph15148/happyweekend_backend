import Room from "../models/room"
import slugify from "slugify"
import imagesroom from "../models/imagesroom"
import dateBooked from "../models/dateBooked"

export const creat = async (req, res) => {
    req.body.slug = slugify(req.body.name)
    try {
        const add = await Room(req.body).save()
        res.json(add)
    } catch (error) {

    }
}
export const getAll = async (req, res) => {
    try {
        const room = await Room.find().exec()
        res.json(room)

    } catch (error) {
        console.log(error);
    }
}

export const getOne = async (req, res) => {
    try {
        const room = await Room.find({ slug: req.params.slug }).exec()
        res.json(room[0])
    } catch (error) {

    }
}


export const remove = async (req, res) => {
    try {
        const deleteRomm = await Room.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(deleteRomm)
    } catch (error) {

    }
}

export const update = async (req, res) => {
    try {
        const newRoom = await Room.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
        console.log(newRoom);
        res.json(newRoom)
    } catch (error) {

    }
}

export const search = async (req, res) => {
    console.log(req.query);
    try {
        const rooms = await dateBooked.find({
            dateFrom: { $eq: "Wed Oct 16 2022 00:00:00 GMT+0700 (Indochina Time)" },
            dateTo: { $eq: "Wed Oct 31 2022 00:00:00 GMT+0700 (Indochina Time)" }
        }).exec()
        res.json(rooms)
    } catch (error) {

    }
}

