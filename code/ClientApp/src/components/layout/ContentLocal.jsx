import React, { Fragment, useEffect, useState } from 'react';
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import axios from "axios";

function ContentLocal() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const url = `https://localhost:44368/api/news/get_all_news`;
            const resultado = await axios.get(url);
            setNews(resultado.data);
        };
        getNews();
    }, []);

    return (
        <Fragment >
            <Container>
                {
                    (news.length > 0) ?
                        news.map((n) => (
                            <Row className="mt-4 mt-md-5" key={ n.id}>
                                <Col md={5}>
                                    <a href="" className="text-reset text-decoration-none">
                                        <h2 className="article-title">{n.title}</h2>
                                        <p className="article-text mt-3 mt-md-4 mb-1">
                                            {n.description}
                                        </p>
                                        <p className="article-date">BY {n.source} · {n.publisheAt}</p>
                                    </a>
                                </Col>
                                <Col md={7}>
                                    <a href={n.url} target='_blank'><Image src={n.image} alt="noticia" className="w-100" /></a>
                                </Col>
                            </Row>
                        ))
                        :
                        <Row className="mt-4 mt-md-5">
                            <Col md={5}>
                                <h3>No News to Show</h3>
                            </Col>
                        </Row>
                }
            </Container> <br /><br />
            </Fragment >
        );
}

export default ContentLocal;