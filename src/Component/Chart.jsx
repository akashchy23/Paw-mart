import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import UserCategoryChart from '../Pages/UserCategoryChart';

const Chart = () => {
    const {user} = use(AuthContext)
    console.log(user)
    return (
        <div>
            <UserCategoryChart email={user.email}></UserCategoryChart>
        </div>
    );
};

export default Chart;