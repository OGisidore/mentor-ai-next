export default function Message({ role, content } : { role : string, content : string }) {
    return (
      <div className={`flex items-start max-w-3xl ${role === 'user' ? 'ml-auto' : ''}`}>
        {role === 'user' ? (
          <>
            <div className="mr-3 bg-primary-100 rounded-lg p-4">
              <p className="text-gray-800">{content}</p>
            </div>
            {/* <UserAvatar/> */}
          </>
        ) : (
          <>
            {/* <BotAvatar/> */}
            <div className="ml-3 bg-gray-100 rounded-lg p-4">
              <p className="text-gray-800">{content}</p>
            </div>
          </>
        )}
      </div>
    );
  }