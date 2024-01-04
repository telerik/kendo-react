import { AppBar, AppBarSection, AppBarSpacer, Avatar, Card,
  CardTitle,
  CardBody,
  CardHeader, } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import {PortfolioChart} from './components/PortfolioChart';
import { KendoGrid } from './components/live-grid/KendoGrid';
import {DataProvider} from './components/live-grid/services';
import { Button, Chip, ChipList } from "@progress/kendo-react-buttons";
import { caretAltUpIcon, fileTxtIcon, bellIcon} from "@progress/kendo-svg-icons";
import { SvgIcon } from '@progress/kendo-react-common';

function App() {

  const rate = [
    {
      text: "+10%",
      value: "+10%",
      disabled: true,
      svgIcon: caretAltUpIcon
    }
  ];

  return (
    <div>
 <div >
  <div>
  <AppBar>
        <AppBarSpacer style={{
        width: 4
      }} />

        <AppBarSection>
          <p className="title">CryptoVault</p>
        </AppBarSection>

        <AppBarSpacer style={{
        width: 32
      }} />
        
        <AppBarSpacer />
        <AppBarSection>
        <img alt="github icon" style={{
            height: '30px',
            width: '30px',
            marginRight: '10px'
           }} src='https://telerik.github.io/kendo-angular/grid-live-data/assets/github-icon.svg' />
        <Button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
        <BadgeContainer>
          
            </BadgeContainer>
            <BadgeContainer>
              <a href='https://www.telerik.com/kendo-react-ui/components/grid/get-started/' style={{color: '#FFF'}}><SvgIcon icon={fileTxtIcon} size='xxlarge'/></a>
            </BadgeContainer>
          </Button>
            <span className="k-appbar-separator" />
        <Button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
            <BadgeContainer>
              <SvgIcon icon={bellIcon} size='xlarge'/>
              <Badge shape="dot" themeColor="info" size="small" position="inside" />
            </BadgeContainer>
          </Button>
          <Avatar type="image">
            <img src={'https://www.telerik.com/kendo-react-ui-develop/components/images/kendoka-react.png'} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
        </AppBarSection>
      </AppBar>
  </div>
</div>

<div id="page">
  <div id="content">
      <p className='my-portfolio-title'>My portfolio</p>
    <div className="card-container">
    <Card>
    <CardHeader style={{
      display: 'flex',
      alignItems: 'center',
      border: 0,
    }}>
      <Avatar type="image" className="right-panel-avatar">
        <img src={require('./assets/BITCOINLARGER.png')} alt="KendoReact Layout Kendoka Avatar" />
      </Avatar>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='right-panel-card-title' style={{ margin: 0 }}>BTC</p>
            <p className='top-card-subtitle' style={{ margin: 0 }}>Bitcoin</p>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0, color: 'black', fontWeight: 'bold' }}>$48,500.51</p>
          <p style={{ margin: 0 }} className="positive">$9,247.91 (23.56%)</p>
        </div>
      </div>
    </CardHeader>
  </Card>
  <Card>
    <CardHeader style={{
      display: 'flex',
      alignItems: 'center',
      border: 0,
    }}>
      <Avatar type="image" className="right-panel-avatar">
        <img src={require('./assets/OX-larger.png')} alt="KendoReact Layout Kendoka Avatar" />
      </Avatar>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='right-panel-card-title' style={{ margin: 0 }}>OX</p>
            <p className='top-card-subtitle' style={{ margin: 0 }}>OpenExchange</p>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0, color: 'black', fontWeight: 'bold'  }}>$4,062.86</p>
          <p style={{ margin: 0 }} className="positive">$1,972.91 (94.4%)</p>
        </div>
      </div>
    </CardHeader>
  </Card>
  <Card>
    <CardHeader style={{
      display: 'flex',
      alignItems: 'center',
      border: 0,
    }}>
      <Avatar type="image" className="right-panel-avatar">
        <img src={require('./assets/TETHERUS-lg.png')} alt="KendoReact Layout Kendoka Avatar" />
      </Avatar>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='right-panel-card-title' style={{ margin: 0 }}>THETH</p>
            <p className='top-card-subtitle' style={{ margin: 0 }}>Tether</p>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0, color: 'black', fontWeight: 'bold'  }}>$183.81</p>
          <p style={{ margin: 0 }} className="positive">$74.67 (68.41%)</p>
        </div>
      </div>
    </CardHeader>
  </Card>
  <Card>
    <CardHeader style={{
      display: 'flex',
      alignItems: 'center',
      border: 0,
    }}>
      <Avatar type="image" className="right-panel-avatar">
        <img src={require('./assets/SHIB-lg.png')} alt="KendoReact Layout Kendoka Avatar" />
      </Avatar>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='right-panel-card-title' style={{ margin: 0 }}>SHIB</p>
            <p className='top-card-subtitle' style={{ margin: 0 }}>ShibaInu</p>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0, color: 'black', fontWeight: 'bold'  }}>$1.31</p>
          <p style={{ margin: 0 }} className="negative">$0.06 (-4.56%)</p>
        </div>
      </div>
    </CardHeader>
  </Card>
    </div> 

    <p className='my-portfolio-title'>Total portfolio</p>
    <PortfolioChart/>

    <p className='my-portfolio-title'>Explore the market</p>
    <DataProvider>
        <KendoGrid refreshRate={500} />
      </DataProvider>
  </div>

  <div id="sideBar">
    <div className="side-bar-content" style={{
      width: '100%'
    }}>
      <br/>
      <div className='balance'>
      <p className='right-panel-title'>My Cards</p>
    <Card className="panel-card" style={{
      width: '370px'
    }}> 
        <CardBody>
          <CardTitle style={{
            color: 'white',
            fontSize: '25px',
            fontWeight: 400,
          }}>Balance</CardTitle>
          <p className='card-balance-currency'>
          $430,933
          </p>
         <br/>
          <p style={{
            color: 'white',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '10px'
          }}>
            Monthly profit
          </p>

          <span className="card-profit-text">
          $12,649
         <span className="interest-chip" style={{
          float: 'right',
         }}>
        <ChipList
        data={rate}
        selection={"single"}
        chip={(props) => (
          <Chip
          style={{
            backgroundColor: 'rgba(75,95,250,.5)',
            borderRadius: '25px',
            color: 'white'
          }}
            {...props}
            svgIcon={props.dataItem.svgIcon}
          />
        )}
      />
         </span>
          </span>
        </CardBody>
      </Card>
      <br/>
      <p className="right-panel-title">
           Recent transactions
        </p>

        <Card className="right-panel-card" >
        <CardHeader style={{
          display: 'flex',
          lineHeight: '0.1',
          border: 0,
          padding: '25px 0 0' 
        }}>
        <Avatar type="image" className="right-panel-avatar">
            <img src={require('./assets/BITCOINLARGER.png')} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
            <div style={{
              marginTop: '12px',
            }}>
         
            <div>
            <p className='right-panel-card-title'>BTC
              <span style={{
                position: 'absolute',
                right: '0',
              }}>+0.4558 BTC</span>
            </p>
            </div>
           
            <p className='right-panel-card-subtitle'>
            Receive
            <span style={{
                position: 'absolute',
                right: '0',
              }}> Today, 13:15</span>
            </p>
          </div>
        </CardHeader>
      </Card>

      <Card className="right-panel-card">
        <CardHeader style={{
          display: 'flex',
          lineHeight: '0.1',
          border: 0,
          padding: '25px 0 0' 
        }}>
        <Avatar type="image" className="right-panel-avatar">
            <img src={require('./assets/TETHERUS-lg.png')} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
            <div style={{
              marginTop: '12px',
            }}>
         
            <div>
            <p className='right-panel-card-title '>THETH
              <span style={{
                position: 'absolute',
                right: '0',
              }}>248.45$</span>
            </p>
            </div>
           
            <p className='right-panel-card-subtitle'>
            Buy 2396.54$
            <span style={{
                position: 'absolute',
                right: '0',
                paddingRight: '0px'
              }}> Today, 13:15</span>
            </p>
          </div>
        </CardHeader>
      </Card>

      <Card className="right-panel-card" >
        <CardHeader style={{
          display: 'flex',
          lineHeight: '0.1',
          border: 0,
          padding: '25px 0 0' 
        }}>
        <Avatar type="image" className="right-panel-avatar">
            <img src={require('./assets/XEC-lg.png')} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
            <div style={{
              marginTop: '12px',
            }}>
         
            <div>
            <p className='right-panel-card-title '>XEC
              <span style={{
                position: 'absolute',
                right: '0',
              }}>1455.55$</span>
            </p>
            </div>
           
            <p className='right-panel-card-subtitle'>
            Buy -420$
            <span style={{
                position: 'absolute',
                right: '0',
                paddingRight: '0px'
              }}> Today, 13:15</span>
            </p>
          </div>
        </CardHeader>
      </Card>

      <Card className="right-panel-card" >
        <CardHeader style={{
          display: 'flex',
          lineHeight: '0.1',
          border: 0,
          padding: '25px 0 0' 
        }}>
        <Avatar type="image" className="right-panel-avatar">
            <img src={require('./assets/USD-lg.png')} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
            <div style={{
              marginTop: '12px',
            }}>
         
            <div>
            <p className='right-panel-card-title '>USD
              <span style={{
                position: 'absolute',
                right: '0',
              }}>+0.4558 BTC</span>
            </p>
            </div>
           
            <p className='right-panel-card-subtitle'>
            Receive
            <span style={{
                position: 'absolute',
                right: '0',
                paddingRight: '18px'
              }}> Today, 13:15</span>
            </p>
          </div>
        </CardHeader>
      </Card>

      <Card className="right-panel-card" >
        <CardHeader style={{
          display: 'flex',
          lineHeight: '0.1',
          border: 0,
          padding: '25px 0 0' 
        }}>
        <Avatar type="image" className="right-panel-avatar">
            <img src={require('./assets/BUSD-lg.png')} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
            <div style={{
              marginTop: '12px',
            }}>
         
            <div>
            <p className='right-panel-card-title '>BUSD
              <span style={{
                position: 'absolute',
                right: '0',
              }}>+1.557 BUSD</span>
            </p>
            </div>
           
            <p className='right-panel-card-subtitle'>
            Receive
            <span style={{
                position: 'absolute',
                right: '0',
                paddingRight: '18px'
              }}> Today, 13:15</span>
            </p>
          </div>
        </CardHeader>
      </Card>

      <Card className="right-panel-card" >
        <CardHeader style={{
          display: 'flex',
          lineHeight: '0.1',
          border: 0,
          padding: '25px 0 0' 
        }}>
        <Avatar type="image" className="right-panel-avatar">
            <img src={require('./assets/ETHERIUM-lg.png')} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
            <div style={{
              marginTop: '12px',
            }}>
         
            <div>
            <p className='right-panel-card-title '>ETHER
              <span style={{
                position: 'absolute',
                right: '0',
              }}>165.16$</span>
            </p>
            </div>
           
            <p className='right-panel-card-subtitle'>
            Receive
            <span style={{
                position: 'absolute',
                right: '0',
              }}> 23 Nov 2021, 09.59</span>
            </p>
          </div>
        </CardHeader>
      </Card>
      <Card className="right-panel-card" >
        <CardHeader style={{
          display: 'flex',
          lineHeight: '0.1',
          border: 0,
          padding: '25px 0 0' 
        }}>
        <Avatar type="image" className="right-panel-avatar">
            <img src={require('./assets/EUR-lg.png')} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
            <div style={{
              marginTop: '12px',
            }}>
         
            <div>
            <p className='right-panel-card-title '>EUR
              <span style={{
                position: 'absolute',
                right: '0',
              }}>366.2$</span>
            </p>
            </div>
           
            <p className='right-panel-card-subtitle'>
            Receive
            <span style={{
                position: 'absolute',
                right: '0',
              }}> Today, 13:15</span>
            </p>
          </div>
        </CardHeader>
      </Card>
         <Card className="right-panel-card" >
        <CardHeader style={{
          display: 'flex',
          lineHeight: '0.1',
          border: 0,
          padding: '25px 0 0' 
        }}>
        <Avatar type="image" className="right-panel-avatar">
            <img src={require('./assets/INCH-lg.png')} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
            <div style={{
              marginTop: '12px',
            }}>
         
            <div>
            <p className='right-panel-card-title '>INCH
              <span style={{
                position: 'absolute',
                right: '0',
              }}>+14.004 INCH</span>
            </p>
            </div>
           
            <p className='right-panel-card-subtitle'>
            Receive
            <span style={{
                position: 'absolute',
                right: '0',
              }}> Today, 13:15</span>
            </p>
          </div>
        </CardHeader>
      </Card>
      </div>
   
    </div>
    <p className='my-portfolio-title' style={{ flex: 1 }}>News Feed</p>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ flex: 1, marginTop: "10px" }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p className="news-feed k-card-title" style={{fontSize: '18px'}}>Crypto bid to buy US constitution copy at action fails</p>
    </div>
  </div>

  <div className="right-panel-avatar">
    <img src='https://telerik.github.io/kendo-angular/grid-live-data/assets/news/CryptoBid.jpg' alt="crypto bid" width="120px" height="70px" />
  </div>

</div>
<br></br>
<div style={{ display: 'flex', alignItems: 'center', marginTop: "10px" }}>
  <div style={{ flex: 1, marginTop: "10px" }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p className="news-feed k-card-title" style={{fontSize: '18px'}}>The Missing Cryptoqueen and ONE COIN
</p>
    </div>
  </div>
  <div className="right-panel-avatar">
    <img src='https://telerik.github.io/kendo-angular/grid-live-data/assets/news/CryptoInvestigation.jpg' alt="crypto bid" width="120px" height="70px" />
  </div>
</div>
<br></br>
<div style={{ display: 'flex', alignItems: 'center', marginTop: "10px" }}>
  <div style={{ flex: 1, marginTop: "10px" }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p className="news-feed k-card-title" style={{fontSize: '18px'}}>The Missing Cryptoqueen and ONE COIN</p>
    </div>
  </div>

  <div className="right-panel-avatar">
    <img src='https://telerik.github.io/kendo-angular/grid-live-data/assets/news/Cryptoqueen.jpg' alt="crypto bid" width="120px" height="70px" />
  </div>

</div>
<br></br>
<div style={{ display: 'flex', alignItems: 'center', marginTop: "10px" }}>
  <div style={{ flex: 1, marginTop: "10px" }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p className="news-feed k-card-title" style={{fontSize: '18px'}}>LA's Staples Center to be <br></br> renamed after cryptocurrency firm</p>
    </div>
  </div>
  <div className="right-panel-avatar">
    <img src='https://telerik.github.io/kendo-angular/grid-live-data/assets/news/StaplesCenter.jpg' alt="crypto bid" width="120px" height="70px" />
  </div>

</div>
<br></br>
<div style={{ display: 'flex', alignItems: 'center', marginTop: "10px" }}>
  <div style={{ flex: 1, marginTop: "10px" }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p className="news-feed k-card-title" style={{fontSize: '18px'}}>Squid Game crypto token collapses in apparent scam</p>
    </div>
  </div>
  <div className="right-panel-avatar">
    <img src='https://telerik.github.io/kendo-angular/grid-live-data/assets/news/SquidGame.jpg' alt="crypto bid" width="120px" height="70px" />
  </div>

</div>
<br></br>
<div style={{ display: 'flex', alignItems: 'center', marginTop: "10px" }}>
  <div style={{ flex: 1, marginTop: "10px" }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p className="news-feed k-card-title" style={{fontSize: '18px'}}>Bitcoin: Bank deputy calls for urgent crypto regulation</p>
    </div>
  </div>
  <div className="right-panel-avatar">
    <img src='https://telerik.github.io/kendo-angular/grid-live-data/assets/news/BitcoinRegulation.jpg' alt="crypto bid" width="120px" height="70px" />
  </div>
</div>
<br></br>
<div style={{ display: 'flex', alignItems: 'center', marginTop: "10px" }}>
  
  <div style={{ flex: 1, marginTop: "10px" }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p className="news-feed k-card-title" style={{fontSize: '18px'}}>Lincolnshire boy has £2m of cryptocurrency seized by police</p>
    </div>
  </div>

  <div className="right-panel-avatar">
    <img src='https://telerik.github.io/kendo-angular/grid-live-data/assets/news/SeizedCryptocurrency.jpg' alt="crypto bid" width="120px" height="70px" />
  </div>

</div>
<br/>
  </div>
</div>
    </div>
  );
}

export default App;