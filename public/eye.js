const Eye = (props) => (
  <div className="eye">
    <svg
      id={props.id}
      onClick={props.showGif}
      width="409"
      height="254"
      viewBox="0 0 409 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id={props.id}
        onClick={props.showGif}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.719 128.469C54.3864 151.819 70.7795 171.419 93.0449 185.915C83.0952 168.528 77 148.53 77 127C77 108.797 81.3568 91.6898 88.7162 76.3298C70.1106 91.0049 55.3757 109.075 42.719 128.469ZM204.5 0C149.819 0 107.973 14.2687 75.1614 36.6808C42.642 58.8935 20.2197 88.275 2.93256 116.574C-0.44845 122.109 -0.935726 128.939 1.62538 134.898C16.4113 169.298 39.5017 199.459 73.4491 220.864C107.32 242.222 150.625 254 204.5 254C314.134 254 379.291 199.844 407.357 134.938C409.673 129.584 409.535 123.485 406.98 118.241C379.299 61.4194 315.077 0 204.5 0ZM204.5 40C184.759 40 162.624 49.3994 145.234 65.8633C127.979 82.1983 117 103.949 117 127C117 150.051 127.979 171.802 145.234 188.137C162.624 204.601 184.759 214 204.5 214C224.276 214 246.695 204.571 264.355 188.054C281.878 171.664 293 149.929 293 127C293 104.071 281.878 82.336 264.355 65.9464C246.695 49.4293 224.276 40 204.5 40ZM318.527 182.729C327.532 166.121 333 147.25 333 127C333 108.382 328.378 90.9298 320.634 75.3299C341.365 90.665 356.451 109.264 366.69 127.497C356.245 148.141 340.556 167.549 318.527 182.729Z"
        fill={props.fill}
      />
    </svg>
  </div>
);

export default Eye;
