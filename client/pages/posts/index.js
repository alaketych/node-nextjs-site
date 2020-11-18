import React from 'react'
import { getPosts } from './../api/fetch'
import { PageTitle, Article } from '../../components/_index'

function Posts({ articles }) {
    return (
        <div className="App">
            <PageTitle
                title="My Blog"
                description="Behind the scenes of products I’ve built, projects I’ve worked on and more."
            />

            <section className="block spacing-tiny-top">
                <div className="wrapper">
                    <h3 className="title-section spacing-tiny-top">FEATURED PROJECT</h3>
                    <div className="divider"></div>

                    <div className="array wrap small-padding">
                        {
                            articles.map(article => {
                                return (
                                    <Article
                                        key={ article.id }
                                        link={ article.id }
                                        article={ article.title }
                                        textPreview={ article.content }
                                        category={ article.label }
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getStaticProps() {
    const responseArticles = await getPosts()
    const articles = await responseArticles.json()

    return {
        props: {
            articles
        }
    }
}

export default Posts
