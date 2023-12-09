import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import MorningDua from "../Component/MornignDua/MorningDua";
import DailyDua from "../Component/DailyDua/DailyDua";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "dailyDua",
                element: <DailyDua></DailyDua>
            },
            {
                path: "morningDua",
                element: <MorningDua></MorningDua>
            }
        ]

    },
]);