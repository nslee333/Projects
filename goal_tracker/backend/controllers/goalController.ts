import {Request, Response} from 'express';

const asyncHandler = require('express-async-handler');

// @desc Get Goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({message: 'Get goals'})
})

// @desc Set Goals
// @route POST /api/goals
// @access Private

const setGoal = asyncHandler(async (req: Request, res: Response) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field.')
    }



    res.status(200).json({message: 'Set goals'})
})

// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc Delete Goals
// @route DELETE /api/goals
// @access Private

const deleteGoal = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal
}