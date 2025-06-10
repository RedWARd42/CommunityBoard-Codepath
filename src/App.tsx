import './App.css'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  return (
    <>
      <Header/>
      <div className='posts'>
      <Card img="https://localist-images.azureedge.net/photos/43074267044573/card@2x/f72f14d6ca105edbea68ca85e2cff1d2a7376715.jpg" title="Virtual Information Session: How to Rent an Apartment" desc="Wed, Jun 11, 2025 9am to 10am" link="https://calendar.utdallas.edu/"/>
      <Card img="https://localist-images.azureedge.net/photos/45385718487863/card/eaae99d6c78a6138ff53c1f9a706283df5884eac.jpg" title="International Student Orientation" desc="Fri, Aug 22, 2025 2pm to 6pm" link="https://calendar.utdallas.edu/"/>
      <Card img="https://localist-images.azureedge.net/photos/31210091585049/card/36129aa57ab2d184148f1b378c2961035815a5bb.jpg" title="Virtual Information Session: UTD Big Howdy" desc="Wed, Jun 18, 2025 9am to 10am" link="https://calendar.utdallas.edu/"/>
      <Card img="https://localist-images.azureedge.net/photos/40183448617569/card/390ee36c0de76cbc85890856de44474cb28a7007.jpg" title="Virtual Information Session: Preparing for Life in Dallas" desc="Wed, Jul 16, 2025 9am to 10am" link="https://calendar.utdallas.edu/"/>
      <Card img="https://localist-images.azureedge.net/photos/45385718487863/card/eaae99d6c78a6138ff53c1f9a706283df5884eac.jpg" title="International Student Orientation" desc="Wed, Aug 13, 2025 2pm to 6pm" link="https://calendar.utdallas.edu/"/>
      <Card img="https://localist-images.azureedge.net/photos/34669235853226/card@2x/5dd3efbd5cdc5f33f95cca463fba6cfa9aa5d456.jpg" title="Virtual Information Session: Indian Students" desc="Wed, Jul 2, 2025 9am to 10am" link="https://calendar.utdallas.edu/"/>
      <Card img="https://localist-images.azureedge.net/photos/44224599084229/card/8e8381f890929e792c9790e9813766b2d905918a.jpg" title="Virtual Info Session - Mapping Your Success:" desc="Fri, Jun 20, 2025 9am to 10am" link="https://calendar.utdallas.edu/"/>
      <Card img="https://localist-images.azureedge.net/photos/45385718487863/card/eaae99d6c78a6138ff53c1f9a706283df5884eac.jpg" title="International Student Orientation" desc="Tue, Aug 19, 2025 2pm to 6pm" link="https://calendar.utdallas.edu/"/>
      <Card img="https://localist-images.azureedge.net/photos/49392008653191/card@2x/2fc27f56f2c0559cf2009616b25e4b238a32ec1c.jpg" title="Summer 2025 ICP Cultural Trip: Cowboys (AT&T)" desc="Mon, Jun 30, 2025 9am to 3pm" link="https://calendar.utdallas.edu/"/>
      <Card img="https://localist-images.azureedge.net/photos/31829446193724/card/9f0583a954d7034bbbd58ad02d8f6f078cb4ddad.jpg" title="McDermott Library Tour" desc="Fri, Aug 15, 2025 10am to 11am" link="https://calendar.utdallas.edu/"/>
      </div>
    </>
  )
}

export default App
