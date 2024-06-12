import { Group } from "@/types";

type Props = {
    group: Group;
};

const GroupItem = ({ group }: Props) => {
    return (
        <div className="bg-white max-h-[150px] h-full flex flex-col items-center justify-start border-2 rounded-lg gap-2 hover:bg-gray-100 p-2">
            <img src={group.img} alt="" className="w-20 h-20 rounded-sm" />
            <span className="text-sm text-center">{group.label}</span>
        </div>
    );
};

export default GroupItem;
