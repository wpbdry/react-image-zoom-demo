import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { width, height } from './styles'
import demos from './demos'
import DemoTitle, { DemoTitleProps } from './DemoTitle'
import artwork from './artwork.jpg'

const useStyles = makeStyles({
  outerWrapper: {
    width: '100%',
  },
  innerWrapper: {
    width,
    margin: 'auto',
  },
})

const demosWithTitles: JSX.Element[] = []
for (const i in demos) {
  const demo = demos[i]
  const nameWithNumber = `[#${+i + 1}] ${demo.name}`
  demosWithTitles.push(<div key={nameWithNumber}>
    <DemoTitle {...{
      name: nameWithNumber,
      url: demo.url,
      hint: demo.hint,
    } as DemoTitleProps} />
    {demo.content}
  </div>)
}

export default function App() {
  const { outerWrapper, innerWrapper } = useStyles()
  return <div className={outerWrapper}><div className={innerWrapper}>
    <h1>react-image-zoom-demo</h1>
    <img src={artwork} {...{ width, height }} alt='original-artwork'/>
    <br />
    <a href='https://www.icanvas.com/collection/hipster-art?product=canvas&sort=popular' target='_blank'>
      image-source
    </a>
    <br />
    <a href='https://github.com/wpbdry/react-image-zoom-demo' target='_blank'>
      react-source-code
    </a>
    {demosWithTitles}
  </div></div>
}
