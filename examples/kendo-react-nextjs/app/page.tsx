'use client';
import { Button } from "@progress/kendo-react-buttons";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Home() {
  const router = useRouter();
  const handleRouteChange = (event: any) => {
    const route = event.nativeEvent.target && event.nativeEvent.target.innerText;
    if (route === 'Route to Grid') {
      router.push('/components/grid');
    }
    else {
      router.push('/components/drawer');
    }
  }
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '50px'
      }}>
        <h3>KendoReact with Next.js</h3>
        <Image src="/kendoreact-logo.svg" width={140} height={200} alt="KendoReact logo" />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        justifyContent: 'center',
      }}>
        <Button
          style={{
            width: '400px',
            height: '200px',
            borderRadius: 20,
          }}
          themeColor={'primary'}
          onClick={handleRouteChange}
        ><span style={{ fontWeight: 500, fontSize: 20 }}>Route to Grid</span></Button>
        <Button
          style={{
            width: '400px',
            height: '200px',
            borderRadius: 20
          }}
          themeColor={'tertiary'}
          onClick={handleRouteChange}
        ><span style={{ fontWeight: 500, fontSize: 20 }}>Route to Drawer</span></Button>
      </div>
    </div>
  )
}
