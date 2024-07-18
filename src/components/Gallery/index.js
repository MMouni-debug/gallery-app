
import {Component} from 'react'

import ThumbnailItem from '../ThumbnailItem'

import './index.css'

import { v4 as uuidv4 } from 'uuid';

const imagesList = [
  {
    id: uuidv4(),
    imageUrl:
      'http://thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg',
    thumbnailUrl:
      'http://thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg',
    imageAltText: 'nature mountain with river and waterfall',
    thumbnailAltText: 'nature mountain with river and waterfall thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&pid=Api&P=0&h=180',
    thumbnailUrl:
      'https://tse3.mm.bing.net/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&pid=Api&P=0&h=180',
    imageAltText: 'nature orange forest',
    thumbnailAltText: 'nature orange forest thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://wallpapercave.com/wp/wp3155700.jpg',
    thumbnailUrl:
      'https://wallpapercave.com/wp/wp3155700.jpg',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl:
      'http://www.photo-paysage.com/albums/Paysages/Lac-riviere-cascade/paradis-lac-cascade-plitvice.jpg',
    thumbnailUrl:
      'http://www.photo-paysage.com/albums/Paysages/Lac-riviere-cascade/paradis-lac-cascade-plitvice.jpg',
    imageAltText: 'nature mountain with river ',
    thumbnailAltText: 'nature mountain with river thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.BXYbbn0IgAucv82dsHgtzwHaEo&pid=Api&P=0&h=180',
    thumbnailUrl:
      'https://tse3.mm.bing.net/th?id=OIP.BXYbbn0IgAucv82dsHgtzwHaEo&pid=Api&P=0&h=180',
    imageAltText: 'nature sunset ',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.m4FmOjk0Bx-N4JaBzsBoTgHaEP&pid=Api&P=0&h=180',
    thumbnailUrl:
      'https://tse4.mm.bing.net/th?id=OIP.m4FmOjk0Bx-N4JaBzsBoTgHaEP&pid=Api&P=0&h=180',
    imageAltText: 'nature  ocean tree',
    thumbnailAltText: 'nature ocean  tree thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.0WL1Z1nrQi1OtYk1RC7eHgHaEK&pid=Api&P=0&h=180',
    thumbnailUrl:
      'https://tse4.mm.bing.net/th?id=OIP.0WL1Z1nrQi1OtYk1RC7eHgHaEK&pid=Api&P=0&h=180',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: uuidv4(),
    imageUrl: 'https://wallpapercave.com/wp/wp4491808.jpg',
    thumbnailUrl:
      'https://wallpapercave.com/wp/wp4491808.jpg',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.

class Gallery extends Component {
  state = {
    imageUrl: imagesList[0].imageUrl,
    imageAltText: imagesList[0].imageAltText,
  }

  onChangeImage = (newImageUrl, altText) => {
    this.setState({imageUrl: newImageUrl, imageAltText: altText})
  }

  render() {
    const {imageUrl, imageAltText} = this.state
    return (
      <div className="app-container">
        <div className="image-container">
          <img src={imageUrl} alt={imageAltText} className="image" />
          <h1 className="nature-heading">Nature Photography</h1>
          <p className="nature-text">Nature Photography by Rahul</p>
          <ul className="thumbnails-container">
            {imagesList.map(eachImage => (
              <ThumbnailItem
                thumbnailDetails={eachImage}
                key={eachImage.id}
                changeImage={this.onChangeImage}
                isActive={imageUrl === eachImage.imageUrl}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Gallery
