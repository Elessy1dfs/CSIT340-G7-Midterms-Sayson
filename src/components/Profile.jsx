function Profile() {
  return (
 <div>
    <header>
            <h2 className="text-6xl font-bold">Eleonora Sayson</h2>
            <p className="mt-1 text-2xl text-[#FA8112]">
              @Elessy1dfss
            </p>
            <p className="mt-3 text-2xl">Front-end developer from Cebu City.</p>
          </header>
          <div className="mt-6 flex gap-6">
            <div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
              <p className="text-4xl font-bold text-[#FA8112]">{followers}</p>
              <p className="mt-1 text-lg">Followers</p>
            </div>
            <div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
              <p className="text-4xl font-bold text-[#FA8112]">{rate}</p>
              <p className="mt-1 text-lg">PHP per hour</p>
            </div>
          </div>
        </div>
  )
}
export default Profile