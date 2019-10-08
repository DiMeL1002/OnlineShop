import React from 'react'
import {Helmet} from "react-helmet";

import Error404 from '~c/errors/error404'
import PageContainer from '~p/pageContainer/pageContainer'

export default class extends React.Component {
    render() {
        return (
            <PageContainer>
                <Helmet>
                    <title>Giant - страница не найдена</title>
                </Helmet>
                <section className="error404-page"><Error404 /></section>
            </PageContainer>
        )
    }
}