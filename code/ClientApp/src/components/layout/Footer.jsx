import React, {useEffect, useState } from 'react';
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import articleImage from '../img/noticia-img.jpg';
import axios from "axios";

function Footer() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const url = `https://gnews.io/api/v4/search?q=watches&token=d7c77cba674f6d1c853b345480f29c20&lang=en`;
            const resultado = await axios.get(url);
            setNews(resultado.data.articles);
        };
        getNews();
    }, []);

    return (
        <footer>
            <Container className="py-4 py-md-5">
                <Row>
                    <Col md={12}>
                        <h3 className="top-title">
                            LAST WEEK’S TOP STORIES
                        </h3>
                    </Col>
                    {
                        (news.length > 0) ?
                            news.map((n) => (
                                <Col xs={6} md={3} key={ n.id}>
                                    <Image src={n.image} alt="noticia" className="img-fluid my-2" />
                                    <h4 className="top-subtitle">
                                        {n.title}
                                    </h4>
                                    <p className="top-author">
                                        BY {n.source.name} · {n.publisheAt}
                                    </p>
                                </Col>
                            ))
                            :
                            <Col xs={6} md={3}>
                                <p className="top-author">
                                    No News Today
                                </p>
                            </Col>
                    }
                </Row> <hr />

                <Row className="mt-4">
                    <Col xs={6} md={3}>
                        <h5 className="footer-title">
                            ABOUT
                        </h5>
                        <ul className="footer-list">
                            <li>COMPANY</li>
                            <li>MASTHEAD</li>
                            <li>CAREERS</li>
                            <li>PRIVACY</li>
                            <li>TERMS OF USE</li>
                        </ul>
                    </Col>
                    <Col xs={6} md={3}>
                        <h5 className="footer-title">
                            CONTACT
                        </h5>
                        <ul className="footer-list">
                            <li>ADVERTISEMENT</li>
                            <li>ASK US ANYTHING</li>
                        </ul>
                    </Col>
                    <Col xs={6} md={3}>
                        <h5 className="footer-title">
                            OUR SITES
                        </h5>
                        <ul className="footer-list">
                            <li>COMPANY</li>
                            <li>MASTHEAD</li>
                            <li>CAREERS</li>
                            <li>PRIVACY</li>
                            <li>TERMS OF USE</li>
                        </ul>
                    </Col>
                    <Col xs={6} md={3}>
                        <h5 className="footer-title">
                            FOLLOW
                        </h5>
                        <ul className="footer-list">
                            <li>COMPANY</li>
                            <li>MASTHEAD</li>
                            <li>CAREERS</li>
                            <li>PRIVACY</li>
                            <li>TERMS OF USE</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
        );
}

export default Footer;