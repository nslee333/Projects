import express, {Express, Request, Response} from 'express';

// @desc Get Goals
// @route GET /api/goals
// @access Private

const getGoals = async (req: Request, res: Response) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc Set Goals
// @route POST /api/goals
// @access Private

const setGoal = async (req: Request, res: Response) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field.')
    }



    res.status(200).json({message: 'Set goals'})
}

// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private

const updateGoal = async (req: Request, res: Response) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc Delete Goals
// @route DELETE /api/goals
// @access Private

const deleteGoal = async (req: Request, res: Response) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal
}