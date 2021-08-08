import { movieApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

export default class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    popular: null,
    upcoming: null,
    error: null,
    loading: true,
  };

  async componentDidMount(){
    try{
      const {data:{results:nowPlaying}} = await movieApi.nowPlaying()
      const {data:{results:upcoming}} = await movieApi.upcoming();
      const {data:{results:popular}} = await movieApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular,
      })
    }catch{
      this.setState({
        error:`can't find movies INFORMATION`
      })
    }finally{
      this.setState({loading:false})
    }
  }

  render() {
    console.log(this.state)
    const { nowPlaying, popular, upcoming, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        popular={popular}
        upcoming={upcoming}
        error={error}
        loading={loading}
      />
    );
  }
}
