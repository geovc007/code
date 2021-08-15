import React, { Fragment, useEffect, useState } from 'react';
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";

function ContentLocal() {

    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [url, setUrl] = useState("");
    const [image, setImage] = useState("");
    const [source, setSource] = useState("");
    const [sourceUrl, setSourceUrl] = useState("");
    const [news, setNews] = useState([]);

    const getNews = async () => {
        const url = `https://localhost:44368/api/news/get_all_news`;
        const resultado = await axios.get(url);
        setNews(resultado.data);
        console.log("hola");
    };

    useEffect(() => {  
        getNews();
    }, []);

    const editInfo = (id, title, description, content, url, image, source, sourceUrl) => {
        setId(id);
        setTitle(title);
        setDescription(description);
        setContent(content);
        setUrl(url);
        setImage(image);
        setSource(source);
        setSourceUrl(sourceUrl);
    }

    const deleteInfo = async (id) => {
        const url = `https://localhost:44368/api/news/delete_news/${id}`;
        const resultado = await axios.delete(url);
        if (resultado.data.estado === "Ok") {
            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "success",
                title: resultado.data.mensaje,
                showConfirmButton: false,
                timer: 3000,
            });
            setId("");
            setTitle("");
            setDescription("");
            setContent("");
            setUrl("");
            setImage("");
            setSource("");
            setSourceUrl("");
            getNews();
        }
        else {
            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "error",
                title: resultado.data.mensaje,
                showConfirmButton: false,
                timer: 3000,
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id.length > 0) {
            const url = `https://localhost:44368/api/news/update_news/${id}`;
            const resultado = await axios.put(url, {
                title: title,
                description: description,
                content: content,
                url: url,
                image: image,
                source: source,
                source_url: sourceUrl
            });
            if (resultado.data.estado === "Ok") {
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "success",
                    title: resultado.data.mensaje,
                    showConfirmButton: false,
                    timer: 3000,
                });
                setId("");
                setTitle("");
                setDescription("");
                setContent("");
                setUrl("");
                setImage("");
                setSource("");
                setSourceUrl("");
                getNews();
            }
            else {
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "error",
                    title: resultado.data.mensaje,
                    showConfirmButton: false,
                    timer: 3000,
                });
            }
        }
        else {
            const url = `https://localhost:44368/api/news/insert_news`;
            const resultado = await axios.post(url, {
                title: title,
                description: description,
                content: content,
                url: url,
                image: image,
                source: source,
                source_url: sourceUrl
            });
            if (resultado.data.estado === "Ok") {
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "success",
                    title: resultado.data.mensaje,
                    showConfirmButton: false,
                    timer: 3000,
                });
                setId("");
                setTitle("");
                setDescription("");
                setContent("");
                setUrl("");
                setImage("");
                setSource("");
                setSourceUrl("");
                getNews();
            }
            else {
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "error",
                    title: resultado.data.mensaje,
                    showConfirmButton: false,
                    timer: 3000,
                });
            }
        }
    }

    return (
        <Fragment >
            <Container>
                <Row className="mt-4 mt-md-5">
                    <Col md={5}>
                        <h3>Insert / Update News</h3>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Form.Group as={Col} md="12">
                                    <Form.Label className="d-none d-sm-block">Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="title"
                                        name="title"
                                        placeholder="Title"
                                        required
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12">
                                    <Form.Label className="d-none d-sm-block">Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="description"
                                        name="description"
                                        placeholder="Description"
                                        required
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12">
                                    <Form.Label className="d-none d-sm-block">Content</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="content"
                                        name="content"
                                        placeholder="Content"
                                        required
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12">
                                    <Form.Label className="d-none d-sm-block">Url</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="url"
                                        name="url"
                                        placeholder="Url"
                                        required
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12">
                                    <Form.Label className="d-none d-sm-block">Image</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="image"
                                        name="image"
                                        placeholder="Imange"
                                        required
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12">
                                    <Form.Label className="d-none d-sm-block">Source</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="source"
                                        name="source"
                                        placeholder="Source"
                                        required
                                        value={source}
                                        onChange={(e) => setSource(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12">
                                    <Form.Label className="d-none d-sm-block">Source Url</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="sourceUrl"
                                        name="sourceUrl"
                                        placeholder="Source Url"
                                        required
                                        value={sourceUrl}
                                        onChange={(e) => setSourceUrl(e.target.value)}
                                    />      <br /><br />
                                </Form.Group>
                                <Form.Group as={Col} md="12">
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="btn-enviar"
                                    >
                                        Send
                                    </Button>
                                </Form.Group>
                            </Row>
                        </Form>
                    </Col>
                    <Col md={5}>
                        <h3>Local News</h3>
                        <Container>
                                {
                                    (news.length > 0)?
                                        news.map((n) => (
                                            <Row className="mt-4 mt-md-5" key={n.id}>
                                                <Col md={12}>
                                                    <h4 className="article-title">{n.title}</h4>
                                                    <p className="article-text mt-3 mt-md-4 mb-1">
                                                        {n.description}
                                                    </p>
                                                    <p className="article-date">BY {n.source} · {n.publisheAt}</p>
                                                    <Button
                                                        type="button"
                                                        variant="warning"
                                                        className="btn-enviar"
                                                        onClick={() =>
                                                            editInfo(
                                                                n.id,
                                                                n.title,
                                                                n.description,
                                                                n.content,
                                                                n.url,
                                                                n.image,
                                                                n.source,
                                                                n.source_url
                                                            )
                                                        }
                                                    >
                                                        Edit
                                                    </Button>{' '}
                                                    <Button
                                                        type="button"
                                                        variant="danger"
                                                        className="btn-enviar"
                                                        onClick={() =>
                                                            deleteInfo(n.id)
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                </Col>
                                            </Row>
                                        ))
                                        :
                                        <Row className="mt-4 mt-md-5">
                                            <Col md={12}>
                                                <h3>No News in Local</h3>
                                            </Col>
                                        </Row>
                                }
                        </Container>
                    </Col>
                </Row>
            </Container> <br /><br />
            </Fragment >
        );
}

export default ContentLocal;