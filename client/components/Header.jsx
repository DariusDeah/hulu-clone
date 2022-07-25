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
function Header({ user }) {
  console.log(user);
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={LightningBoltIcon} />
        <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="Collections" Icon={CollectionIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      {user && (
        <div>
          <Avatar className="object-contain" img={user.photo} />
          <h3>
            {user.firstName} {""} {user.lastName}
          </h3>
        </div>
      )}
    </header>
  );
}

export default Header;
