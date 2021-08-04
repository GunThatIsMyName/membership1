import React from "react";
import HomePresenter from "./HomePresenter";

export default class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    topRated: null,
    upcoming: null,
    error: null,
    loading: true,
  };
  render() {
    const { nowPlaying, topRated, upcoming, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        topRated={topRated}
        upcoming={upcoming}
        error={error}
        loading={loading}
      />
    );
  }
}
