import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ChromePicker } from 'react-color';

const api = require('../api/rest-api');

  // width X height
  // Screen - 192 X 40
  // Small Font - 5 X 8
  // Large Font - 10 X 16


export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text_size: 'large',
            text_row_1: '',
            text_row_2: '',
            text_row_3: '',
            text_row_4: '',
            maxBrightness: 100,
            minBrightness: 50,
            brightness: 75,
            color_r: 200,
            color_g: 200,
            color_b: 200,
        }
    }

    clearScreen = (e) => {
        console.log('TODO: clearing screen')
        // this.pushToSign("command", "clearall")
    }

    onChangeTextSize = (e) => {
        this.setState({
            text_size: e
        })
    }

    onChangeText1 = (e) => {
        this.setState({
            text_row_1: e.target.value,
        })
    }

    onChangeText2 = (e) => {
        this.setState({
            text_row_2: e.target.value,
        })
    }

    onChangeText3 = (e) => {
        this.setState({
            text_row_3: e.target.value,
        })
    }

    onChangeText4 = (e) => {
        this.setState({
            text_row_4: e.target.value,
        })
    }

    onChangeColor = (color) => {
        this.setState({
            color_r: color.rgb.r,
            color_g: color.rgb.g,
            color_b: color.rgb.b,
        })
    }

    onChangeBrightness = (e) => {
        this.setState({
            brightness: e.target.value,
        })
    }

    sendBrightness = (e) => {
        console.log('TODO: sending brightness')
        api.restCall({
            key: "setBright",
            value: this.state.maxBrightness,
        })
    }

    sendText = (e) => {
        console.log('TODO: sending text')
    }

    onSubmit = (e) => {
        console.log('submitting to sign')
        // this.pushToSign('a', '1')
        // this.pushToSign('a', '1')
        // this.pushToSign('a', '1')
        api.restCall({
            key: 'a',
            value: '1',
        })
        api.restCall({
            key: 'a',
            value: '1',
        })
        api.restCall({
            key: 'a',
            value: '1',
        })
        // let messages = [
        //     ['a', '1'],
        //     ['b', '2'],
        //     ['c', '3']
        // ]

        // let count = 0
        // while (count < messages.length) {
        //     // debugger
        //     this.pushToSign(messages[count][0], messages[count][1]);
        //     count++
        // }
    }

    render() {
        // console.log('rendering')
        const {
            text_size,
            text_row_1,
            text_row_2,
            text_row_3,
            text_row_4,
            maxBrightness,
            minBrightness,
            brightness,
            color_r,
            color_g,
            color_b,
        } = this.state;

        return (
            <div style={{ marginTop: 10 }}>
                <Container>
                    <Row>
                        <Col>
                            <h1>
                                Church Sign Controller
                            </h1>
                        </Col>
                    </Row>
                    <h3>Text</h3>
                    {' '}
                    <Row>
                        <Col>
                            <h4>Size:</h4>
                        </Col>
                        <Col>
                            <ToggleButtonGroup type="radio" name="options" value={text_size} onChange={this.onChangeTextSize}>
                                <ToggleButton value={'large'}>Large</ToggleButton>
                                <ToggleButton value={'small'}>Small</ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="text 1"
                                    aria-label="text 1"
                                    aria-describedby="text 1"
                                    value={text_row_1}
                                    onChange={this.onChangeText1}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="text 2"
                                    aria-label="text 2"
                                    aria-describedby="text 2"
                                    value={text_row_2}
                                    onChange={this.onChangeText2}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    {text_size === 'small' &&
                        <Row>
                            <Col>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="text 3"
                                        aria-label="text 3"
                                        aria-describedby="text 3"
                                        value={text_row_3}
                                        onChange={this.onChangeText3}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    }
                    {text_size === 'small' &&
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="text 4"
                                    aria-label="text 4"
                                    aria-describedby="text 4"
                                    value={text_row_4}
                                    onChange={this.onChangeText4}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    }
                    <h4>Color</h4>
                    <Row>
                        <Col>
                            <ChromePicker
                                color={{
                                    r: color_r,
                                    g: color_g,
                                    b: color_b,
                                }}
                                onChange={this.onChangeColor}
                            />
                        </Col>
                    </Row>
                    <h4>Brightness</h4>
                    <Row>
                        <Col xs={4}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby=""
                                    value={brightness}
                                    onChange={this.onChangeBrightness}
                                />
                            </InputGroup>
                        </Col >
                        <Col xs={4}>
                            <Button variant="secondary">Send Brightness</Button>
                        </Col>
                    </Row>
                    <h4>Commands</h4>
                    <Row>
                        <Col>
                            <Button variant="secondary" onClick={this.clearScreen}>Clear Screen</Button>{' '}
                            <Button variant="secondary" onClick={this.sendText}>Send Text</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}