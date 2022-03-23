import axios from 'axios';
import React, {useState} from 'react'
import styled from 'styled-components'
import {Pagination} from '@material-ui/lab'
import {Divider, Box} from '@material-ui/core'
import { landscapeTab, mobile, PC, tab, XS } from '../responsive';

const Container = styled.div`
    padding: 4rem;
    ${mobile({ padding: '2.5rem'})}
`
const Form = styled.form``
const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 54px;
  padding: 5px;
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid #000000;
`;
const MovieCatTitle = styled.h2`
  margin-top: 3rem;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  text-align: left;
`;
const MovieSetContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    row-gap: 50px;
    padding-bottom: 1rem;
    ${mobile({ gridTemplateColumns: '1fr'})}
    ${tab({ gridTemplateColumns: '1fr 1fr'})}
    ${landscapeTab({ gridTemplateColumns: '1fr 1fr 1fr'})}
    ${PC({ gridTemplateColumns: '1fr 1fr 1fr 1fr'})}
`
const MovieSet = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 12px;
  padding: 10px;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222;
  ${XS({ width: "100%" })};
`;

const MovieName = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
  padding: 5px;
`;

const Content = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [error, setError] = useState('')

    //Pagination
    const itemsPerPage = 10;
    const [page, setPage] = useState(1)
    const [noOfPages] = useState(Math.ceil(data.length / itemsPerPage))

    const API_KEY = '31dba3e6';
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
            setData(res.data.Search)
            console.log(res.data.Search);
        } catch (error) {
            setError(error.response.data.error);
        }
    }
    
    const handlePage = (event, value) => {
        setPage(value)
    }

  return (
    <Container>
            <Form onSubmit={handleSubmit}>
            <SearchContainer>
                <Label>Search</Label>
                <SearchInput type="text" onChange={(e)=> setSearch(e.target.value)} />
            </SearchContainer>
            </Form>
        <MovieCatTitle>
            Movie
            {error && <span className="error-message">{error}</span>}
        </MovieCatTitle>
        <MovieSetContainer>
            {data?.length ? data?.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item, index)=> (
                <MovieSet style={{background: `url(${item.Poster})`}} key={index}>
                    <MovieName>
                        {item.Title}
                    </MovieName>
                </MovieSet>
            )) : 
            (<>Nothing to display. Search Movies</>)
        } 
        
        </MovieSetContainer>
        <Divider />
        <Box component='span'>
          <Pagination
          count={noOfPages}
          page={page}
          onChange={handlePage}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          style={{marginTop: "10px"}}
          />
        </Box>
    </Container>
  )
}

export default Content