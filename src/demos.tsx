import React from 'react'
import artwork from './artwork.jpg'
import { width, height } from './styles'

import ReactImageMagnify, { SmallImageType, LargeImageType } from 'react-image-magnify'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
// @ts-ignore
import { MapInteractionCSS } from 'react-map-interaction'
// @ts-ignore
import Zoom from 'react-img-zoom'
// @ts-ignore
import { PinchView } from 'react-pinch-zoom-pan'
// @ts-ignore
import ReactImageZoom from 'react-image-zoom'
// @ts-ignore
import PinchZoomPan from 'react-responsive-pinch-zoom-pan'
// @ts-ignore
import MediumZoom from 'react-medium-image-zoom'

export class Demo {
    name: string
    url: string
    hint: string
    content: JSX.Element
    constructor(url: string, hint:string, content: JSX.Element, name?:string) {
        this.url = url
        this.hint = hint
        this.content = content
        this.name = name || url.split('/').pop() || 'untitled-demo'
    }
}

export default [
    new Demo(
        'https://github.com/ethanselzer/react-image-magnify',
        'try hovering',
        <ReactImageMagnify
            smallImage={{
                width,
                height,
                src: artwork,
                alt: 'react-image-magnify-demo',
            } as SmallImageType}
            largeImage={{
                src: artwork,
                width: width * 3,
                height: height * 3,
                alt: 'react-image-magnify-demo'
            } as LargeImageType}
            enlargedImagePosition='over'
        />,
    ),
    new Demo(
        'https://github.com/prc5/react-zoom-pan-pinch',
        'try scrolling and dragging',
        <TransformWrapper>
            <TransformComponent>
                <img src={artwork} {...{ width, height }} alt='react-zoom-pan-pinch-demo'/>
            </TransformComponent>
        </TransformWrapper>,
    ),
    new Demo(
        'https://github.com/transcriptic/react-map-interaction',
        'try dragging and scrolling',
        <MapInteractionCSS>
      <img src={artwork} {...{ width, height }} alt='react-map-interaction-demo'/>
    </MapInteractionCSS>,
    ),
    /* NOT CURRENTLY WORKING */
    // new Demo(
    //     'https://github.com/LeoNero/react-img-zoom',
    //     'try hovering',
    //     <div><Zoom
    //         img={artwork}
    //         zoomScale={3}
    //         {...{ width, height }}
    //         transitionTime={0.5}
    //   /></div>,
    // ),
    new Demo(
        'https://github.com/gerhardsletten/react-pinch-zoom-pan',
        'try holding alt while dragging',
        <PinchView backgroundColor='#fff' maxScale={4} containerRatio={((height / width) * 100)}>
            <img src={artwork} {...{ width, height }} alt='react-pinch-zoom-pan-demo' />
      </PinchView>,
    ),
    new Demo(
        'https://github.com/malaman/react-image-zoom',
        'try hovering',
        <ReactImageZoom
            width={width}
            zoomWidth={width}
            img={artwork}
            zoomPosition='original'
        />,
    ),
    new Demo(
        'https://github.com/bradstiff/react-responsive-pinch-zoom-pan',
        'try scrolling, dragging, and double clicking',
        <PinchZoomPan zoomButtons={false} doubleTapBehavior={'zoom'}>
            <img src={artwork} alt='react-responsive-pinch-zoom-pan-demo' />
        </PinchZoomPan>,
    ),
]
