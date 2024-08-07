import { Raycaster, Triangle, Vector3, type Object3D, Vector2, Group, Mesh, Scene } from 'three'

/*  
   Rotate Object About Pivot Point, doing it with pure "object.rotation" would rotate this about world pivot point.
   obj - your object (THREE.Object3D or derived)
   point - the point of rotation (THREE.Vector3)
   axis - the axis of rotation (normalized THREE.Vector3)
   theta - radian value of rotation
   pointIsWorld - boolean indicating the point is in world coordinates (default = false) 
*/
function rotateAboutPoint(
  obj: Object3D,
  point: Vector3,
  axis: Vector3,
  theta: number,
  pointIsWorld: boolean = false
): void {
  // credit: TheJim01 and shieldgenerator7 https://stackoverflow.com/a/42866733/14020082
  if (pointIsWorld) {
    obj.parent!.localToWorld(obj.position) // compensate for world coordinate
  }

  obj.position.sub(point) // remove the offset
  obj.position.applyAxisAngle(axis, theta) // rotate the POSITION
  obj.position.add(point) // re-add the offset

  if (pointIsWorld) {
    obj.parent!.worldToLocal(obj.position) // undo world coordinates compensation
  }

  obj.rotateOnAxis(axis, theta) // rotate the OBJECT
}

function degToRadians(deg: number): number {
  return (deg * Math.PI) / 180
}

function convertListOfMeshesToGroup(listOfObjects: Mesh[], scene: Scene): Group {
  const group = new Group()
  for (let i = 0; i < listOfObjects.length; i++) {
    group.add(listOfObjects[i])
  }
  scene.add(group)
  return group
}

export { convertListOfMeshesToGroup, rotateAboutPoint, degToRadians }
