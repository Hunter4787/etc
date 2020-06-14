import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="container">
                    <p className="float-right"><a href="#">Back to top</a></p>
                    <p>© 2017-2018 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
                </footer>
            </div>
        );
    }
}

export default Footer;