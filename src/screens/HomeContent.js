import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom';
class HomeContent extends React.Component {
    constructor(props) {
        super(props);
        this.cli = false;
        this.state = {
            MusicState: false
          };
    }
    //マウスカーソルもっていったら、動的に動くようにしたいよね
    render() {
        return (
            <div className='container'>
                <section className="section">
                <h1 className="title has-text-primary">Profile</h1>
                <div class="container">
                    <li>名前 : 田中勇太</li>
                    <li>年齢 : 20</li>
                    <li>所属 : 日本大学文理学部情報科学科3年</li>
                    <li>生年月日 : 1999年9月9日生まれ</li>
                    <li>座右の銘 :「五十歩百歩」</li>
                 </div>
                </section>
                <section className="section">
                <h1 className="title has-text-primary">Hobbies</h1>
                    <div class="container">
                        <li>ゲーム</li>
                        <li>競技プログラミング</li>
                        <li>アニメ</li>
                        <li>Music</li>
                        <button class="button is-success is-outlined"><NavLink exact to="/Music">Music about more...</NavLink></button>
                        <li>Fashion</li>
                        <button class="button is-success is-outlined"><NavLink exact to="/Fashions">Fashion about more...</NavLink></button>
                    </div>
                </section>
                <section className="section">
                <h1 className="title has-text-primary">Jobs</h1>
                    <div class="container">
                        <li>2018~ 株式会社東京個別指導学院　講師</li>
                        <li>2020~ 株式会社エイチアイ　アルバイト</li>
                    </div>
                </section>
                <section className="section">
                <h1 className="title has-text-primary">Achivement</h1>
                    <div class="container">
                        <li>基本情報技術者 2018年 11月</li>
                        <li>応用情報技術者 2019年 6月</li>
                        <li>AtCoder Rate 1200 達成 2020年 4月</li>
                </div>
                </section>
                
            </div>
        );
    }
}
export default HomeContent;