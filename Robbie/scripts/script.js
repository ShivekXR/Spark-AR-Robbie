const Reactive = require("Reactive")
const Scene = require("Scene")

async function main() {
    const camera = await Scene.root.findFirst("Camera")
    const focus = await Scene.root.findFirst("Focus")
    const destination = await Scene.root.findFirst("Destination")

    focus.worldTransform.position = camera.worldTransform.position
    focus.transform.y = 0

    destination.worldTransform.position = camera.worldTransform.applyToPoint(Reactive.point(0, 0, -0.75))
    destination.transform.y = 0
}

main()
