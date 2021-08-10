import { movieApi, tvApi } from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

class DetailContainer extends React.Component {
  constructor(props){
    super(props)
    const{location:{pathname}}=props
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: {id},
      },
      history: {push}
    } = this.props;
    const {isMovie}=this.state
    const numberId = Number(id);
    if (isNaN(numberId)) {
      return push('/');
    }
    let result =null;
    try{
      if(isMovie){
        ({data:result} = await movieApi.movieDetail(numberId))   
      }else{
        ({data:result} = await tvApi.showDetail(numberId))        
      }
    }catch{
      this.setState({error:"Can't find anything"})
    }finally{
      this.setState({loading:false,result})
    }
  }

  render() {
    const {result, error, loading} = this.state;
    console.log(this.state)
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
export default DetailContainer;