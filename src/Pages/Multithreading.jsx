import React from 'react';

const MultiThreadingDoc = () => {
  return (
    <div className="p-8 bg-gradient-to-t from-gray-900 to-slate-700">
      <h1 className="text-4xl font-bold mb-6">Multi-threading in C++</h1>
      <p className="mb-4">
        C++ provides robust support for multi-threading, allowing developers to write concurrent programs that can execute multiple threads simultaneously. This is essential for improving performance in applications that require parallel processing, such as simulations, games, and data processing.
      </p>
      <p className="mb-6">
        The C++ standard library includes several headers and classes to support multi-threading, including <code>&lt;atomic&gt;</code>, <code>&lt;thread&gt;</code>, <code>&lt;mutex&gt;</code>, <code>&lt;condition_variable&gt;</code>, and <code>&lt;future&gt;</code>.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Headers</h2>
      <p className="mb-4">
        The following headers are essential for multi-threading in C++:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-gradient-to-t from-gray-900 to-slate-700 border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-t from-gray-900 to-slate-700">
              <th className="px-4 py-2 border">Header</th>
              <th className="px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;atomic&gt;</code></td>
              <td className="px-4 py-2 border">Provides atomic operations for thread-safe access to shared data.</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;thread&gt;</code></td>
              <td className="px-4 py-2 border">Defines the <code>std::thread</code> class for creating and managing threads.</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;mutex&gt;</code></td>
              <td className="px-4 py-2 border">Provides mutual exclusion mechanisms like <code>std::mutex</code> to protect shared data.</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;condition_variable&gt;</code></td>
              <td className="px-4 py-2 border">Allows threads to wait for certain conditions to be met.</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border"><code>&lt;future&gt;</code></td>
              <td className="px-4 py-2 border">Provides facilities for asynchronous computation and retrieving results.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Atomic Operations</h2>
      <p className="mb-4">
        Atomic operations are operations that are executed without interference from other threads. They are essential for thread-safe access to shared data. The <code>&lt;atomic&gt;</code> header provides atomic types and operations.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`#include <atomic>
#include <iostream>
#include <thread>

std::atomic<int> counter(0);

void increment() {
    for (int i = 0; i < 1000; ++i) {
        counter++;
    }
}

int main() {
    std::thread t1(increment);
    std::thread t2(increment);

    t1.join();
    t2.join();

    std::cout << "Counter: " << counter << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p className="mb-6">
        In this example, <code>std::atomic&lt;int&gt;</code> ensures that the <code>counter</code> variable is accessed atomically, preventing data races.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Threads</h2>
      <p className="mb-4">
        The <code>&lt;thread&gt;</code> header provides the <code>std::thread</code> class for creating and managing threads. Threads allow you to execute multiple functions concurrently.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`#include <iostream>
#include <thread>

void printHello() {
    std::cout << "Hello from thread!" << std::endl;
}

int main() {
    std::thread t(printHello);
    t.join(); // Wait for the thread to finish
    return 0;
}`}
        </code>
      </pre>
      <p className="mb-6">
        In this example, a new thread is created to execute the <code>printHello</code> function.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Mutexes</h2>
      <p className="mb-4">
        Mutexes are used to protect shared data from being accessed simultaneously by multiple threads. The <code>&lt;mutex&gt;</code> header provides the <code>std::mutex</code> class.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`#include <iostream>
#include <thread>
#include <mutex>

std::mutex mtx;
int sharedData = 0;

void increment() {
    for (int i = 0; i < 1000; ++i) {
        mtx.lock();
        sharedData++;
        mtx.unlock();
    }
}

int main() {
    std::thread t1(increment);
    std::thread t2(increment);

    t1.join();
    t2.join();

    std::cout << "Shared Data: " << sharedData << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p className="mb-6">
        In this example, <code>std::mutex</code> ensures that only one thread can access <code>sharedData</code> at a time.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Condition Variables</h2>
      <p className="mb-4">
        Condition variables allow threads to wait for certain conditions to be met. They are often used with mutexes to synchronize threads.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>

std::mutex mtx;
std::condition_variable cv;
bool ready = false;

void printId(int id) {
    std::unique_lock<std::mutex> lock(mtx);
    cv.wait(lock, []{ return ready; });
    std::cout << "Thread " << id << " is running!" << std::endl;
}

int main() {
    std::thread threads[5];
    for (int i = 0; i < 5; ++i) {
        threads[i] = std::thread(printId, i);
    }

    std::this_thread::sleep_for(std::chrono::seconds(1));
    {
        std::lock_guard<std::mutex> lock(mtx);
        ready = true;
    }
    cv.notify_all();

    for (auto& t : threads) {
        t.join();
    }

    return 0;
}`}
        </code>
      </pre>
      <p className="mb-6">
        In this example, threads wait for the <code>ready</code> variable to become <code>true</code> before proceeding.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Futures and Promises</h2>
      <p className="mb-4">
        The <code>&lt;future&gt;</code> header provides facilities for asynchronous computation and retrieving results. The <code>std::future</code> and <code>std::promise</code> classes are commonly used.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
        <code>
          {`#include <iostream>
#include <future>

int compute() {
    return 42;
}

int main() {
    std::future<int> result = std::async(compute);
    std::cout << "Result: " << result.get() << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p className="mb-6">
        In this example, <code>std::async</code> runs the <code>compute</code> function asynchronously, and <code>std::future</code> retrieves the result.
      </p>
    </div>
  );
};

export default MultiThreadingDoc;