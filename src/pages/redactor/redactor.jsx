import Header from "./Header";
import Templates from "./Templates";
import Properties from './Properties'
import Hierarchy from './Hierarchy'

function Redactor() {
  return (
	<div>
        <div class="bg-gray-200 h-full w-screen">

        </div>
        <div class="fixed inset-0">
			<Header/>
			<Templates/>
            <nav class="fixed inset-y-0 right-0 bg-gray-800 bg-opacity-95 h-screen w-48 opacity-0 hover:opacity-100">
                <Hierarchy/>
                <Properties/>
            </nav>
        </div>
    </div>
  );
}

export default Redactor;
