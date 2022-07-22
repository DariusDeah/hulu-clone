import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Avatar from "./UI/Avatar";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={LightningBoltIcon} />
        <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="Collections" Icon={CollectionIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      {/* <Image
        className="object-contain"
        src="https://cdn-icons-png.flaticon.com/512/3522/3522336.png"
        width={100}
        height={80}
      /> */}
      <Avatar
        className="object-contain"
        height={14}
        width={14}
        img="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
      />
    </header>
  );
}

export default Header;
