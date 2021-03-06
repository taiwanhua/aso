import React, { useContext } from 'react'
import { Context } from '../../Store/store'
import { BasicContainer } from '../../Components/Containers';

export const Error404 = (props) => {

    const { Theme } = useContext(Context);
    const { errorPages: { error404 } } = Theme;

    return (
        <>
            <BasicContainer theme={error404.basicContainer}>
                Error404
            </BasicContainer>
        </>
    )
}


