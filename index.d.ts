export interface Managed<T extends ICharacter> extends T {
    ["Humanoid"]: T["Humanoid"] & {
        ControllerManager: ControllerManager & {
            RootPart: Managed<T>["HumanoidRootPart"]
            GroundController: GroundController;
            ClimbController: ClimbController;
            SwimController: SwimController;
            AirController: AirController;
        }
    };

    ["HumanoidRootPart"]: T["HumanoidRootPart"] & {
        GroundSensor: ControllerPartSensor;
        ClimbSensor: ControllerPartSensor;
        SwimSensor: BuoyancySensor;
        IKController?: IKControl;
    };

    PrimaryPart: Managed<T>["HumanoidRootPart"];
}

export interface ICharacter extends Model {
    ["Humanoid"]: Humanoid & {
        BodyHeightScale: NumberValue;
        BodyDepthScale: NumberValue;
        BodyProportionScale: NumberValue;
        BodyTypeScale: NumberValue;
        BodyWidthScale: NumberValue;
        HeadScale: NumberValue;
    };
    ["HumanoidRootPart"]: BasePart & { RootRigAttachment: Attachment; };
    PrimaryPart: ICharacter["HumanoidRootPart"];
}

export interface ICharacterR6 extends ICharacter {
    ["Humanoid"]: ICharacter["Humanoid"];
    ["Left Arm"]: BasePart;
    ["Right Arm"]: BasePart;
    ["Left Leg"]: BasePart;
    ["Right Leg"]: BasePart;
    ["Torso"]: BasePart;
    ["HumanoidRootPart"]: ICharacter["HumanoidRootPart"] & {
        ["Neck"]: Motor6D;
        ["Left Shoulder"]: Motor6D;
        ["Right Shoulder"]: Motor6D;
        ["Right Hip"]: Motor6D;
        ["Left Hip"]: Motor6D;
    };
    ["Head"]: BasePart & {
        face: Decal;
    };
}

export interface ICharacterR15 extends ICharacter {
    ["Humanoid"]: ICharacter["Humanoid"];
    ["Head"]: BasePart & { face : Decal };
    ["LeftHand"]: BasePart & { LeftWrist: Motor6D };
    ["RightHand"]: BasePart & { RightWrist: Motor6D };
    ["LeftLowerArm"]: BasePart & { LeftElbow: Motor6D };
    ["RightLowerArm"]: BasePart & { RightElbow: Motor6D };
    ["LeftUpperArm"]: BasePart & { LeftShoulder: Motor6D };
    ["RightUpperArm"]: BasePart & { RightShoulder: Motor6D };
    ["UpperTorso"]: BasePart & { Waist: Motor6D };
    ["HumanoidRootPart"]: ICharacter["HumanoidRootPart"];
    ["LowerTorso"]: BasePart & { Root: Motor6D };
    ["LeftLowerLeg"]: BasePart & { LeftKnee: Motor6D };
    ["RightLowerLeg"]: BasePart & { RightKnee: Motor6D };
    ["LeftUpperLeg"]: BasePart & { LeftHip: Motor6D };
    ["RightUpperLeg"]: BasePart & { RightHip: Motor6D };
    ["LeftFoot"]: BasePart & { LeftAnkle: Motor6D };
    ["RightFoot"]: BasePart & { RightAnkle: Motor6D };
    PrimaryPart: ICharacterR15["HumanoidRootPart"];
}
