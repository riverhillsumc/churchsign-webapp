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
            currentCommand: '',
        }
    }

    clearScreen = async (e) => {
        const command = '{"command": "clearall"}';
        await this.setCommand(command);
        await api.restCall(command);
        await this.setCommand('');
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

    onChangeMinBrightness = (e) => {
        this.setState({
            minBrightness: e.target.value,
        })
    }

    onChangeMaxBrightness = (e) => {
        this.setState({
            maxBrightness: e.target.value,
        })
    }

    sendBrightness = async (e) => {
        const { brightness } = this.state;
        const command = `{"setBright": ${brightness}}`;
        await this.setCommand(command);
        await api.restCall(command);
        await this.setCommand('');
    }

    sendMinBrightness = async (e) => {
        const { minBrightness } = this.state;
        const command = `{"minBright": ${minBrightness}}`;
        await this.setCommand(command);
        await api.restCall(command);
        await this.setCommand('');
    }

    sendMaxBrightness = async (e) => {
        const { maxBrightness } = this.state;
        const command = `{"maxBright": ${maxBrightness}}`;
        await this.setCommand(command);
        await api.restCall(command);
        await this.setCommand('');
    }

    setCommand = async (command) => {
        this.setState({
            currentCommand: command,
        });
    }

    sendText = (e) => {
        console.log('TODO: sending text')
    }

    onSubmit = async (e) => {
        console.log('submitting to sign')
        const {
            text_size,
            text_row_1,
            text_row_2,
            text_row_3,
            text_row_4,
            brightness,
            color_r,
            color_g,
            color_b,
        } = this.state;
        let command

        this.setState({
            submitting: true,
        })

        // Commands
        const messages = []
        // messages.push('"command": "clearall"'); // Sending clear all
        // messages.push(`"setBright": ${brightnessMax}`); // Sending Brightness
        // messages.push(`"maxBright": ${brightnessMax}`); // Sending Max Brightness
        // messages.push(`"minBright": ${brightnessMin}`); // Sending Min Brightness
        messages.push(`{"color": [${color_r}, ${color_g}, ${color_g}]}`); // Sending color
        messages.push('{"cursor": [0,1]}'); // Moving the cursor to the row 1

        // Larger Font
        if (text_size === 'large') {
            messages.push(`{"width": "0", "fontsize": "2", "text": "${text_row_1}"}`); // Entering row 1
            messages.push('{"cursor": [0, 24]}'); // Moving the cursor to the row 2
            messages.push(`{"width": "0", "fontsize": "2", "text": "${text_row_2}"}`); // Entering row 2
        } else {
            messages.push(`{"width": "0", "fontsize": "1", "text": "${text_row_1}"}`); // Entering row 1
            messages.push('{"cursor": [0, 10]}'); // Moving the cursor to the row 2
            messages.push(`{"width": "0", "fontsize": "1", "text": "${text_row_2}"}`); // Entering row 2
            messages.push('{"cursor": [0, 20]}'); // Moving the cursor to the row 3
            messages.push(`{"width": "0", "fontsize": "1", "text": "${text_row_3}"}`); // Entering row 3
            messages.push('{"cursor": [0, 30]}'); // Moving the cursor to the row 4
            messages.push(`{"width": "0", "fontsize": "1", "text": "${text_row_4}"}`); // Entering row 4
        }

        let index = 0;
        while (index < messages.length) {
            console.log('message: ', messages[index]);
            await this.setCommand(messages[index]);
            await api.restCall(messages[index]);
            index++;
        }

        await this.setCommand('');
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
            currentCommand,
        } = this.state;

        const submitting = !!currentCommand;

        return (
            <div style={{ marginTop: 10 }}>
                <Container>
                    <Row>
                        <Col>
                            <h1>
                                Advanced
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
                            <Button variant="secondary" onClick={this.sendBrightness}>Send Brightness</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby=""
                                    value={minBrightness}
                                    onChange={this.onChangeMinBrightness}
                                />
                            </InputGroup>
                        </Col >
                        <Col xs={4}>
                            <Button variant="secondary" onClick={this.sendMinBrightness}>Send Min Brightness</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby=""
                                    value={maxBrightness}
                                    onChange={this.onChangeMaxBrightness}
                                />
                            </InputGroup>
                        </Col >
                        <Col xs={4}>
                            <Button variant="secondary" onClick={this.sendMaxBrightness}>Send Max Brightness</Button>
                        </Col>
                    </Row>
                    <h4>Commands</h4>
                    <Row>
                        <Col>
                            <Button disabled={submitting} variant="secondary" onClick={this.clearScreen}>Clear Screen</Button>{' '}
                            <Button disabled={submitting} variant="secondary" onClick={this.sendText}>Send Text</Button>{' '}
                            <Button disabled={submitting} variant="secondary" onClick={this.onSubmit}>Submit</Button>
                        </Col>
                    </Row>
                    {submitting &&
                        <Row>
                            <Col>
                                <h4>Progress:</h4>
                                <h5>{currentCommand}</h5>
                            </Col>
                        </Row>
                    }
                </Container>
            </div>
        )
    }
}