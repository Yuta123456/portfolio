import React from 'react';
import pic1 from './image/pic1.jpg'
import pic2 from './image/pic2.jpg'
import pic3 from './image/pic3.jpg'
import pic4 from './image/pic4.jpg'
import pic5 from './image/pic5.jpg'
import pic6 from './image/pic6.jpg'
import pic7 from './image/pic7.jpg'
import pic8 from './image/pic8.jpg'
class FashionsContent extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="title has-text-primary">Fashions</h1>
                    <div className="content">
                    とても洋服が好きです。大学生になってからですが、すこしずつ洋服を集め始めています。良い洋服を着て、良い音楽を聴きながらお出かけをするとQOLがかなり上がるのでおすすめです。服好きなのにWEBデザインはゴミなのかよとかいうコメントはすべて無視させていただきます。
                    </div>
                    <section className="columns has-centered">
                        <div className="column"><img src = {pic1} width = "40%" height = "30%"></img></div>
                        <div className="column"><img src = {pic3} width = "50%" height = "30%"></img></div>
                        <div className="column"><img src = {pic4} width = "50%" height = "50%"></img></div>
                    </section>
                    <section className="columns has-centered">
                        <div className="column"><img src = {pic5} width = "50%" height = "30%"></img></div>
                        <div className="column"><img src = {pic7} width = "30%" height = "30%"></img></div>
                        <div className="column"><img src = {pic8} width = "50%" height = "50%"></img></div>
                    </section>
                    <h1 className="title has-text-primary">Made by girl friend</h1>
                    <div className="content">
                        彼女が作った服を着たりします。
                    </div>
                    <section className="columns has-centered">
                        <div className="column"><img src = {pic2} width = "30%" height = "30%"></img></div>
                        <div className="column"><img src = {pic6} width = "30%" height = "30%"></img></div>
                    </section>
                </div>
            </div>
        );
    }
}
export default FashionsContent;