import {useState} from 'react'
// import Header from '../components/Header'
import ShowCard from '../components/ShowCard'
import ShowGrid from '../components/ShowGrid'
import ShowTabs from '../components/ShowTabs'
import Grid from '@mui/material/Grid';
export default function Home({tr, kr}) {

  return (
    <div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f07765" fillOpacity="0.6" d="M0,96L60,96C120,96,240,96,360,90.7C480,85,600,75,720,96C840,117,960,171,1080,202.7C1200,235,1320,245,1380,250.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
      {/* <Header /> */}
      <main>
        <ShowTabs 
          trShows={
            <ShowGrid>
              { tr.map((val, i)=>{
                return (
                  <Grid key={i} item lg={3} md={4} sm={12}>
                    <ShowCard {...val} />
                  </Grid>
                )
              })}
            </ShowGrid>
          }
          krShows={
            <ShowGrid>
              { kr.map((val, i)=>{
                return (
                  <Grid key={i} item lg={3} md={4} sm={12}>
                    <ShowCard {...val} />
                  </Grid>
                )
              })}
            </ShowGrid>
          }
        />    
      </main>
    </div>
  )
}
function latest(data){
  const shows = new Set()
  const showNames = []
  for(const item of data){
    if(!showNames.includes(item['show']['name'])){
      shows.add(item['show'])
      showNames.push(item['show']['name'])
    }
    // setShow(prevState => new Set(prevState).add(item['show']))
  }
  return Array.from(shows)
}
export async function getServerSideProps(context) {
  const date = new Date();
  // console.log(datesList)
  let data1 = []
  let data2 = [] 
  for (let i = 0; i < 10; i++) {
    if(i != 0) date.setDate(date.getDate()+1)
    const res1 = await fetch(`https://api.tvmaze.com/schedule?country=TR&date=${date.toISOString().split('T')[0]}`)
    const res2 = await fetch(`https://api.tvmaze.com/schedule?country=KR&date=${date.toISOString().split('T')[0]}`)
    data1 = data1.concat(await res1.json())
    data2 = data2.concat(await res2.json())

  }
  const tr = latest(data1) 
  const kr = latest(data2)
  // Pass data to the page via props
  return { props: { tr, kr } }
}
