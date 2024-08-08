import { InitialBoxCoordinates } from '../initialize_components/InitialBoxCoordinates'
import type { BoxObjectInterface } from '../interfaces/BoxObjectInterface'

export class BoxObjectHandler {
  BoxObjects: BoxObjectInterface[]
  topSixIndexes: number[]
  constructor() {
    this.BoxObjects = this.dynamicallyAddId(InitialBoxCoordinates)
    this.topSixIndexes = [8, 9, 11, 13, 15, 17, 19, 22, 26]
  }
  getBoxObjects(): BoxObjectInterface[] {
    return this.BoxObjects
  }
  setBoxObjects(BoxObjects: BoxObjectInterface[]): void {
    this.BoxObjects = BoxObjects
  }
  getTopFace(): BoxObjectInterface[] {
    const topBoxes = this.BoxObjects.filter((element) => this.topSixIndexes.includes(element.id!))
    return topBoxes
  }
  getTheRest(): BoxObjectInterface[] {
    const rest_boxes = this.BoxObjects.filter(
      (element) => !this.topSixIndexes.includes(element.id!)
    )
    return rest_boxes
  }
  dynamicallyAddId(BoxCoordinate: BoxObjectInterface[]): BoxObjectInterface[] {
    const returnArray: BoxObjectInterface[] = []
    for (let i = 0; i < BoxCoordinate.length; i++) {
      returnArray[i] = {
        id: i,
        color: BoxCoordinate[i].color,
        position: BoxCoordinate[i].position,
        width: BoxCoordinate[i].width,
        height: BoxCoordinate[i].height,
        depth: BoxCoordinate[i].depth
      }
    }
    return returnArray
  }
}
