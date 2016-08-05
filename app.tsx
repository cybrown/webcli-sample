import * as angular from 'angular';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class DefaultController {
    message = 'Hello from Angular.JS !'
}

angular.module('myModule', [])
    .controller('DefaultController', DefaultController);

angular.bootstrap(document.body, ['myModule'], {strictDi: true});

interface IAppComponentProps {
    message: string;
    changeMessage: React.EventHandler<React.FormEvent<HTMLInputElement>>;
}

let message = "Hello from React !"

const AppComponent = (props: IAppComponentProps) => (
    <div>
        <input type="text" value={props.message} onChange={props.changeMessage} />
        <p>{props.message}</p>
    </div>
)

function changeMessage(event: React.FormEvent<HTMLInputElement>) {
    message = event.target.value;
    render();
}

function render() {
    ReactDOM.render(
        <AppComponent message={message} changeMessage={changeMessage} />,
        document.getElementById('react-root')
    );
}

render();
