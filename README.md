# React
<p><h3>React</h3></p>
<ul>
    <li>JavaScript library created by Facebook and is used for building user interfaces (UIs) and front-end applications</li>
    <li>often called a framework because of it's behavior and capabilities</li>
    <li>the most popular framework in the industry (for now 2019)</li>
</ul>
<br>
<hr>
<br>

<p><h3>Why we use React</h3></p>
<ul>
    <li>Makes front-end JavaScript mush easier</li>
    <li>Uses self contained, independent components with their own state</li>
    <li>Much more interactive UI</li>
    <li>JSX - Easily incorporate JS in markup</li>
    <li>Easy to work with teams</li>
</ul>
<p>컴포넌트 간의 상호작용?</p>
<br>
<hr>
<br>

<p><h3>REACT STATE</h3></p>
<ul>
    <li>Components can have state which is an object that determines how that component renders and behaves</li>
    <li>We can also have "application level" state manager like REDUX or Reacts own context API</li>
</ul>
<p><code><pre>
state = {
    title: 'xxx'
    body: 'xxx'
    isFeatured: true
}
</pre></code></p>
<br>
<hr>
<br>

<p><h3>CREATE-REACT-APP</h3></p>
<ul>
    <li>CLI Tool for creating React applications</li>
    <li>Uses Webpack but needs no configuration from you</li>
    <li>Comes bundled with a dev server with hot reload</li>
    <li>"npm run build" will compile all your code to something that the browser  can read</li>
</ul>
<br>
<hr>
<br>
<p><h3>ANATOMY OF A COMPONENT</h3></p>
<p><code><pre>
Class Post extends React.Component {
    state =  {
        title: 'Post One',
        body: 'This is my post'
    }

    render() {
        return (
            <div>
                <h3>{ this.state.title}</h3>
                <p>{ this.state.body}</p>
            </div>
        )
    }
}
</pre></code></p>

