import { InitialBoxCoordinates } from '../initialize_components/InitialBoxCoordinates'
import type { BoxObjectInterface } from '../interfaces/BoxObjectInterface'

export class BoxObjectHandler {
  BoxObjects: BoxObjectInterface[]
  constructor() {
    this.BoxObjects = this.dynamicallyAddId(InitialBoxCoordinates)
  }
  getBoxObjects(): BoxObjectInterface[] {
    return this.BoxObjects
  }
  setBoxObjects(BoxObjects: BoxObjectInterface[]): void {
    this.BoxObjects = BoxObjects
  }
  getTopFace(): BoxObjectInterface[] {
    const top_six_indexes = [8, 9, 11, 13, 15, 17, 19, 22, 26]
    const top_boxes = this.BoxObjects.filter((element) => top_six_indexes.includes(element.id!))
    return top_boxes
  }
  getTheRest(): BoxObjectInterface[] {
    const top_six_indexes = [8, 9, 11, 13, 15, 17, 19, 22, 26]
    const rest_boxes = this.BoxObjects.filter((element) => !top_six_indexes.includes(element.id!))
    return rest_boxes
  }
  dynamicallyAddId(BoxCoordinate: BoxObjectInterface[]): BoxObjectInterface[] {
    const return_array: BoxObjectInterface[] = []
    for (let i = 0; i < BoxCoordinate.length; i++) {
      return_array[i] = {
        id: i,
        color: BoxCoordinate[i].color,
        position: BoxCoordinate[i].position,
        width: BoxCoordinate[i].width,
        height: BoxCoordinate[i].height,
        depth: BoxCoordinate[i].depth
      }
    }
    return return_array
  }
}
